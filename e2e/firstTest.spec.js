describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have app screen', async () => {
    await expect(element(by.id('app'))).toBeVisible();
  });

  it('should show app screen text', async () => {
    await expect(element(by.text('Welcome to React Native!'))).toBeVisible();
    await expect(element(by.text('To get started, edit App.js'))).toBeVisible();
    await expect(element(by.text('Press Cmd+R to reload,\n Cmd+D or shake for dev menu'))).toBeVisible();
  });

  it('should show switch and toggle it on', async () => {
    await expect(element(by.id('toggle'))).toHaveValue('0');
    await element(by.id('toggle')).longPress();
    await expect(element(by.id('toggle'))).toHaveValue('1');
  });
});
