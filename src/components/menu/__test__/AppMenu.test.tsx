import { AppMenu } from '@/components/menu/AppMenu';
import { rtlRender, userEvent, screen } from '@/test/test-utils';

describe('AppMenu', () => {
  const openButtonText = 'Open';
  const menuItems = ['Item 1', 'Item 2', 'Item 3'];

  const setup = () => {
    rtlRender(
      <AppMenu>
        <AppMenu.Button>{openButtonText}</AppMenu.Button>
        <AppMenu.List>
          {menuItems.map((item) => (
            <AppMenu.Item key={item}>{item}</AppMenu.Item>
          ))}
        </AppMenu.List>
      </AppMenu>
    );
  };

  it('should not show menu', async () => {
    setup();
    menuItems.forEach((item) => {
      expect(screen.queryByText(item)).not.toBeInTheDocument();
    });
  });

  it('should show menu on clicking button', async () => {
    setup();
    await userEvent.click(screen.getByRole('button', { name: openButtonText }));

    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeVisible();
    });
  });

  it('should be disappeared after clicking one of the item', async () => {
    setup();
    await userEvent.click(screen.getByRole('button', { name: openButtonText }));
    await userEvent.click(screen.getByText(menuItems[0]));

    expect(screen.queryByText(menuItems[0])).not.toBeVisible();
  });
});
