function Avatar({ NameInitials }) {
  return (
    <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-50 border-blue-100 rounded-full dark:bg-gray-600">
      <span class="font-medium text-blue-500">{NameInitials}</span>
    </div>
  );
}

export default Avatar;
