 public class MinMaxArray {
    public static void main(String[] args) {
        int[] arr = { 7, 3, 15, -2, 0, 99, 12 };
        if (arr == null || arr.length == 0) {
            System.out.println("Масив порожній");
            return;
        }

        int min = arr[0];
        int max = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min) min = arr[i];
            if (arr[i] > max) max = arr[i];
        }

        System.out.printf("Min = %d, Max = %d%n", min, max);
    }
}
