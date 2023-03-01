import SampleJobHello from '../jobs/SampleJobHello';

jest.useFakeTimers();

describe('SampleJobHello', () => {
  it('should call sendRequest after 5 minutes', () => {
    //Arrange
    const job = new SampleJobHello('*/5 * * * * *');
    const doJobSpy = jest.spyOn(job, 'doJob');

    //Act
    job.start();

    //Assert
    expect(doJobSpy).not.toHaveBeenCalled();
    jest.advanceTimersByTime(5 * 60 * 1000);
    expect(doJobSpy).toHaveBeenCalled();
  });
});
