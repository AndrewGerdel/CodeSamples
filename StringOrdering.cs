   public static void Main(string[] args)
        {
            //Option 1: Yes, there is a Reverse function, we were right!
            List<string> items1 = new List<string>() { "Adam", "Ajay", "Ben", "Eric", "Hillary", "Jeff", "Sandhya" };
            Console.WriteLine(String.Format("Items1 is:     {0}", String.Join(",", items1)));
            items1.Reverse();
            Console.WriteLine(String.Format("Items1 is now: {0}", String.Join(",", items1)));

            //Option 2: Order them by throwing them into another array
            List<string> items2 = new List<string>() { "Adam", "Ajay", "Ben", "Eric", "Hillary", "Jeff", "Sandhya" };
            Console.WriteLine(String.Format("Items2 is:     {0}", String.Join(",", items2)));
            List<string> reversedItems = new List<string>();
            for (int i = items2.Count - 1; i >= 0; i--)
            {
                reversedItems.Add(items2[i]);
            }
            Console.WriteLine(String.Format("Items2 is now: {0}", String.Join(",", reversedItems)));

            //Option 3: Reverse the items without using any additional variables. 
            List<string> items3 = new List<string>() { "Adam", "Ajay", "Ben", "Eric", "Hillary", "Jeff", "Sandhya" };
            Console.WriteLine(String.Format("Items3 is:     {0}", String.Join(",", items3)));
            for (int i = 0; i <= (items3.Count / 2) - 1; i++)
            {
                string val1 = items3[i];
                string val2 = items3[items3.Count - 1 - i];
                items3[i] = val2;
                items3[items3.Count - 1 - i] = val1;
            }
            Console.WriteLine(String.Format("Items3 is now: {0}", String.Join(",", items3)));

            Console.ReadLine();
        }
